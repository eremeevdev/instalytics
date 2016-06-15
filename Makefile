shell:
	docker exec -it instalytics_backend_1 ./manage.py shell


update_stat:
	docker exec -it instalytics_backend_1 ./manage.py update_stat


bbash:
	docker exec -it instalytics_backend_1 bash


fbash:
	docker exec -it instalytics_frontend_1 bash