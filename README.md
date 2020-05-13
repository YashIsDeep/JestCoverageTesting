ASSUMPTIONS:

1) All source code is in the src folder only. The src variable in customTesting.sh may be modified to change this behaviour.
2) Infections(Files affected by the changed files) are recorded by comparison of the last commit to the last push done on the origin/master branch of the repository.

HOW TO RUN:

To run tests on only the infected files, run "npm test".

DEPENDENCIES:
"dependency-cruiser": "9.1.0"
"jest": "26.0.1"