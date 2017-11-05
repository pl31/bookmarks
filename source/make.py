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

# iterate over all bookmarks
for bookmark in bookmarks["bookmarks"]:
    print(bookmark["title"], ": ", bookmark["url"])
    tag_permutations = list(itertools.permutations(bookmark["tags"]))
    for tag_permutation in tag_permutations:
        print("/".join(tag_permutation)) 
