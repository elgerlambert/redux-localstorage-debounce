BIN=node_modules/.bin

build:
	$(BIN)/babel src --ignore __tests__ --out-dir lib

clean:
	rm -rf lib

lint:
	$(BIN)/eslint src

PHONY: build clean lint
