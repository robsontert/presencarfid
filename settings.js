// Configuração mínima do Node-RED para uso em nuvem (sem editor).
module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    // Editor e API administrativa desligados: abertos na internet,
    // permitiriam executar código no servidor. Para alterar o fluxo, edite flows.json e reimplante.
    disableEditor: true,
    // Sem isto a API administrativa (/flows, /nodes...) continua acessível.
    httpAdminRoot: false,
    // flows_cred.json guarda apenas referências ${MQTT_USER} / ${MQTT_PASS}
    // (os valores reais vêm das variáveis de ambiente), então não precisa
    // de criptografia.
    credentialSecret: false,
    logging: { console: { level: 'info', metrics: false, audit: false } }
};
