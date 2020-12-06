DOCKER_SHELL:=docker-compose exec backend

run:
	docker-compose up

shell-django:
	$(DOCKER_SHELL) python manage.py shell
