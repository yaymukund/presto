.PHONY: all move_files build test watch

watcher = node_modules/nodemon/bin/nodemon.js

all: test

build:
	./scripts/compile

publish:
	./scripts/publish

move_test_files:
	cp node_modules/mocha/mocha.js spec/vendor
	cp node_modules/mocha/mocha.css spec/vendor
	cp node_modules/expect.js/index.js spec/vendor/expect.js

build_tests: build move_test_files
	cat spec/*.js > spec/build/specs.js

watch:
	$(watcher) --exec make build_tests --ignore spec/vendor/ --ignore spec/lib/

test: build_tests
	open spec/index.html
