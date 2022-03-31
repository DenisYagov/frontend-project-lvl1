install: #клонирование репозитория
	npm ci
brain-games: #run project
	node bin/brain-games.js
publish: #publication of the packet
	npm publish --dry-run
