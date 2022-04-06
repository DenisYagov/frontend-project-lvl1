install: #клонирование репозитория
	npm ci
brain-games: #run project
	node bin/brain-games.js
brain-even: #run game 1
	node bin/brain-even.js
brain-calc: #run game 2
	node bin/brain-calc.js
brain-gcd: #run game 3
	node bin/brain-gcd.js
publish: #publication of the packet
	npm publish --dry-run
lint:
	npx eslint .

