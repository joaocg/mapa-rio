# Projeto Mapa Interativo
## Seleção ISP Rio de Janeiro

Para executar a aplicação localmente, basta abrir o arquivo `index.html` em um navegador compatível com a API ArcGIS, preferencialmente o Chrome. 

A obtenção dos dados utilizados neste mapa foi feita através do catálogo de dados disponível no [link](https://gis-portal.westeurope.cloudapp.azure.com/iderj/?page=Cat%C3%A1logo-de-Dados&views=Parceiros-3%2CExibir-22%2CExibir-10) além dos dados contidos nesse [repositório](https://github.com/prefeitura-rio/queries-datario/blob/master/metadata.json) para demarcar os municípios do Estado do Rio de Janeiro.

Utilizei os seguintes dados:
* [Divisão por município](https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-33-mun.json).
* [Limites do Estado do Rio de Janeiro](https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/lim_limite_estadual_2022/FeatureServer/0?f=json).
* [Unidades de conservação do Rio de Janeiro](https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/amb_unidades_conservacao_2021/FeatureServer/0?f=json).