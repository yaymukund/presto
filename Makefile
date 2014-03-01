.PHONY: all move_files build test watch

watcher = node_modules/nodemon/bin/nodemon.js

all: build test

move_files:
	cp node_modules/mocha/mocha.js spec/vendor
	cp node_modules/mocha/mocha.css spec/vendor
	cp node_modules/expect.js/index.js spec/vendor/expect.js

build: move_files
	cat spec/*.js > spec/build/specs.js

watch:
	$(watcher) --exec make build --ignore spec/vendor/ --ignore spec/lib/

test:
	open spec/index.html
