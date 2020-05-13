src="src"

find $src -name "*.js" | sort > file1.list
find $src -name "" | sort > file2.list
comm -23 file1.list file2.list > vertices.list
rm file1.list file2.list
# echo "Files to be used stored in vertices.list"

git diff-tree --no-commit-id --name-only -r HEAD..origin/master | grep -E "^src/.*.js$" | sort > infVertices.list
# echo "Infected files stored in infVertices.list"

dependency-cruise -T text --include-only $src $src > edges.list
# echo "Dependencies stored in edges.list"


# UNCOMMENT FOR DEBUGGING PURPOSES
# echo
# echo "VERTICES"
# cat vertices.list
# echo
# echo "DEPENDENCIES"
# cat edges.list
# echo
# echo "INFECTED"
# cat infVertices.list
# echo

node summariseInfections.js > "allInfectedVertices.list"
input="./allInfectedVertices.list"
while IFS= read -r line
do
  x="$line"
  y=${x%.js}
  echo "jest $y.test.js"
# jest $line 
done < "$input"

# rm vertices.list edges.list infVertices.list allInfectedVertices.list