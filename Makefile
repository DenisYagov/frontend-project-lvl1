install: #клонирование репозитория
	npm ci
brain-games: #run project
	node bin/brain-games.js
brain-even: #run game 1
	node bin/brain-even.js
brain-calc: #gun game 2
	node bin/brain-calc.js
publish: #publication of the packet
	npm publish --dry-run
lint:
	npx eslint .

