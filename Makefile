.PHONY: all move_files build test watch

watcher = node_modules/nodemon/bin/nodemon.js

all: test

build:
	./scripts/compile

publish:
	./scripts/publish

move_test_files:
	./scripts/prepare-tests

build_tests: build move_test_files
	cat spec/util.js spec/*_spec.js > spec/build/specs.js

watch:
	$(watcher) --exec make build_tests --ignore spec/vendor/ --ignore spec/lib/

test: build_tests
	open spec/index.html
