import os
import itertools
import shutil
import yaml

# definitions
script_dir = os.path.dirname(os.path.realpath(__file__)) 
bookmarkfile_path = os.path.join(script_dir, "bookmarks.yml")
docs_source_dir = os.path.realpath(os.path.join(script_dir, "docs")) 
docs_target_dir = os.path.realpath(os.path.join(script_dir, "../docs"))

# copy template
shutil.rmtree(docs_target_dir)
shutil.copytree(docs_source_dir, docs_target_dir)

# read bookmark file
with open(bookmarkfile_path, "r") as bookmark_file:
    bookmarks = yaml.load(bookmark_file)

# iterate over all bookmarks and create structure by tag-permutations
all_tags = []
bookmarks_by_tag_permutations = {}
for bookmark in bookmarks["bookmarks"]:
    print(bookmark["title"], ": ", bookmark["url"])
    if ("tags" not in bookmark) or (len(bookmark["tags"]) < 1):
        bookmark["tags"] = "_untagged"
    for tag in bookmark["tags"]:
        if tag not in all_tags:
            all_tags.append(tag)
    for i in range(len(bookmark["tags"])):
        tag_permutations = list(itertools.permutations(bookmark["tags"],i + 1))
        for tag_permutation in tag_permutations:
            if tag_permutation not in bookmarks_by_tag_permutations:
                bookmarks_by_tag_permutations[tag_permutation] = []
            bookmarks_by_tag_permutations[tag_permutation].append(bookmark)

# create directory structure
for tag_permutation, bookmarks in sorted(bookmarks_by_tag_permutations.items()):
    tag_reldir = "/".join(tag_permutation)
    tag_dir = os.path.join(docs_target_dir, tag_reldir)
    os.makedirs(tag_dir)
    with open(os.path.join(tag_dir, "index.md"), "w") as page_file:
        page_file.write("# {tags}\n\n".format(tags=tag_reldir))
        for bookmark in bookmarks:
            bookmark_tags = []
            for tag in bookmark["tags"]:
                if tag not in tag_permutation:
                    bookmark_tags.append("[{tag}]({tag})".format(tag=tag))
                else:
                    bookmark_tags.append(tag)
            page_file.write("- [{title}]({url}) [{bookmark_tags}]\n"
                .format(bookmark_tags=",".join(bookmark_tags), **bookmark))
        
    