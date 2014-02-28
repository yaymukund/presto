.PHONY: all move_files build test

all: move_files build test

move_files:
	cp node_modules/mocha/mocha.js spec/vendor
	cp node_modules/mocha/mocha.css spec/vendor
	cp node_modules/expect.js/index.js spec/vendor/expect.js

build:
	cat spec/*.js > spec/build/specs.js

test:
	open spec/index.html
