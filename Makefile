migrate-create:
	- migrate create -ext sql -dir server/sql/schemas -tz "UTC" $(args)