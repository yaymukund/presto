.PHONY: all move_files build test watch

watcher = node_modules/nodemon/bin/nodemon.js

all: test

build:
	./scripts/compile

publish:
	./scripts/publish

build_tests: build
	./scripts/build-tests

watch:
	$(watcher) --exec make build_tests --ignore spec/vendor/ --ignore spec/lib/

test: build_tests
	open spec/index.html
