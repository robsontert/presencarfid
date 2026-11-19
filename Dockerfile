FROM nodered/node-red:latest
COPY settings.js /data/settings.js
COPY flows.json /data/flows.json
COPY flows_cred.json /data/flows_cred.json
