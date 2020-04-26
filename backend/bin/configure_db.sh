#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring dragonstakdb"

dropdb -U postgres dragonstackdb
createdb -U postgres dragonstackdb

psql -U postgres dragonstackdb < ./bin/sql/generation.sql
psql -U postgres dragonstackdb < ./bin/sql/dragon.sql
psql -U postgres dragonstackdb < ./bin/sql/trait.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"