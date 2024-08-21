require(["esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/layers/FeatureLayer", "esri/widgets/LayerList", "esri/widgets/Expand", "esri/widgets/Legend" ], 
  function(Map, MapView, GeoJSONLayer, FeatureLayer, LayerList, Expand, Legend) {
  
      /**
       * Chamada dos dados que irão compor o mapa
       */
      const divisaoMunicipio = "https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-33-mun.json";
      const limiteEstadual = "https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/lim_limite_estadual_2022/FeatureServer/0?f=json";
      const unidadesConservacao = "https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/amb_unidades_conservacao_2021/FeatureServer/0?f=json";

      /**
       * Configuração
       */
      const geojsonLayer = new GeoJSONLayer({
        url: divisaoMunicipio,
        popupTemplate: {
          title: "Cidade: {name}", 
          content: "Descrição: {description}" 
        }
      });


      const featureLayer = new FeatureLayer({
        url: limiteEstadual,
          popupTemplate: {
            title: "Limite Estadual",
            content: "Área: {Shape__Area} hectares<br>Perímetro: {Shape__Length} metros"
          }
      });


      const conservationLayer = new FeatureLayer({
        url: unidadesConservacao,
          popupTemplate: {
            title: "Unidade de Conservação",
            content: "{NOME_UNIDADE}<br>Tipo: {TIPO_UNIDADE}" 
          }
      });


      const map = new Map({
        basemap: "streets-navigation-vector",
        layers: [geojsonLayer, featureLayer, conservationLayer] 
      });


      /**
       * Configuração para o mapa centralizar nas coordenadas do centro do Rio
       */
      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-43.2096, -22.9035],
        zoom: 10
      });


      const layerList = new LayerList({
        view: view
      });


      const expand = new Expand({
        view: view,
        content: layerList
      });


      view.ui.add(expand, "top-right");


      const legend = new Legend({
        view: view,
        container: "legendDiv"
      });


      view.ui.add(legend, "bottom-right");

      /**
       * Criando os filtros
       */
      const conservationCheckbox = document.createElement('input');
      conservationCheckbox.type = 'checkbox';
      conservationCheckbox.id = 'toggleConservationLayer';
      conservationCheckbox.checked = true; 

      const conservationLabel = document.createElement('label');
      conservationLabel.htmlFor = 'toggleConservationLayer';
      conservationLabel.innerText = 'Mostrar Unidades de Conservação';

      const conservationControlDiv = document.createElement('div');
      conservationControlDiv.className = 'esri-widget esri-component';
      conservationControlDiv.appendChild(conservationCheckbox);
      conservationControlDiv.appendChild(conservationLabel);
      view.ui.add(conservationControlDiv, 'top-left');

      conservationCheckbox.addEventListener('change', function() {
        conservationLayer.visible = conservationCheckbox.checked;
      });


      const geojsonCheckbox = document.createElement('input');
      geojsonCheckbox.type = 'checkbox';
      geojsonCheckbox.id = 'toggleGeojsonLayer';
      geojsonCheckbox.checked = true; 
      const geojsonLabel = document.createElement('label');
      geojsonLabel.htmlFor = 'toggleGeojsonLayer';
      geojsonLabel.innerText = 'Mostrar Limites de Municípios';

      const geojsonControlDiv = document.createElement('div');
      geojsonControlDiv.className = 'esri-widget esri-component';
      geojsonControlDiv.appendChild(geojsonCheckbox);
      geojsonControlDiv.appendChild(geojsonLabel);
      view.ui.add(geojsonControlDiv, 'top-left');

      geojsonCheckbox.addEventListener('change', function() {
        geojsonLayer.visible = geojsonCheckbox.checked;
      });

  });