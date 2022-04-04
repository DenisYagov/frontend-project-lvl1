install: #клонирование репозитория
	npm ci
brain-games: #run project
	node bin/brain-games.js
brain-even: #run game 1
	node bin/brain-even.js
publish: #publication of the packet
	npm publish --dry-run
lint:
	npx eslint .

