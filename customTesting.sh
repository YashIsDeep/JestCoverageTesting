src="./src"

find $src -name "*.js" | sort > file1.list
find $src -name "" | sort > file2.list
comm -23 file1.list file2.list > vertices.list
rm file1.list file2.list
echo "Files to be used stored in vertices.list"

git diff --name-only | grep -E "*.js$" | cat > infVertices.list
echo "Infected files stored in infVertices.list"

dependency-cruise -T text --include-only src src > edges.list
echo "Dependencies stored in edges.list"


cat vertices.list
cat edges.list
cat infVertices.list

#node generateDependencies.js > "allInfectedVertices.list"

rm vertices.list
rm edges.list
rm infVertices.list

input="./allInfectedVertices.list"
while IFS= read -r line
do
  x="$line"
  y=${x%.js}
  echo "jest $y.test.js"
# jest $line 
done < "$input"

rm allInfectedVertices.list