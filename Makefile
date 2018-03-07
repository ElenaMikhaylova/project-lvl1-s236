install:
	npm install

start:
	npm run babel-node -- src/bin/games/brain-gcd.js

publish:
	npm publish

lint:
	npm run eslint .
