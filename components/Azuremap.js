import React, { memo, useMemo, useState } from "react";
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureMapOptions,
  AzureMapPopup,
  IAzureMapFeature
} from "react-azure-maps";
import {
  AuthenticationType,
  data,
  MapMouseEvent,
  PopupOptions
} from "azure-maps-control";
// import { key } from "./key";
// import { carData } from "./data";

const renderPoint = (data) => {
  return (
    <AzureMapFeature
      key={data.licensePlate}
      id={data.licensePlate}
      type="Point"
      // coordinate={data}
      coordinate={[data.position.longitude, data.position.latitude]}
      properties={{
        id: data.licensePlate,
        popUpProp: data
      }}
    />
  );
};

const MarkersExample = () => {
  const [mapData, setMapData] = useState([...carData]);
  // const [mapData, setMapData] = useState([...points]);
  const [popupOptions, setPopupOptions] = useState({});
  const [popupProperties, setPopupProperties] = useState({});

  const option = useMemo(() => {
    return {
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: key
      },
      //center: mapData.position,
      //center: [carData.position.latitude, carData.position.longitude],
      center: [-64.188623, -31.420061],
      zoom: 15,
      view: "Auto"
    };
  }, []);

  const memoizedMarkerRender = useMemo(
    () => mapData.map((el) => renderPoint(el)),
    [mapData]
  );
  return (
    <>
      <AzureMapsProvider>
        <div style={{ height: "600px" }}>
          <AzureMap options={option}>
            <AzureMapDataSourceProvider
              id={"MultiplePoint AzureMapDataSourceProvider"}
            >
              <AzureMapLayerProvider
                id={"MultiplePoint AzureMapLayerProvider"}
                options={{
                  iconOptions: {
                    image: "pin-red"
                  }
                }}
                events={{
                  mousemove: (e) => {
                    if (e.shapes && e.shapes.length > 0) {
                      const prop = e.shapes[0];

                      // Set popup options
                      setPopupOptions({
                        ...popupOptions,
                        position: new data.Position(
                          prop.data.geometry.coordinates[0],
                          prop.data.geometry.coordinates[1]
                        ),
                        pixelOffset: [0, -18]
                      });

                      if (prop.data.properties)
                        // Set popup properties from Feature Properties that are declared on create Feature
                        setPopupProperties({
                          ...prop.data.properties.popUpProp
                        });
                    }
                  }
                }}
                type="SymbolLayer"
              />
              {memoizedMarkerRender}
            </AzureMapDataSourceProvider>
            <AzureMapPopup
              isVisible={true}
              options={popupOptions}
              popupContent={
                <div style={{ padding: "8px 16px" }}>
                  <h3>{popupProperties.licensePlate}</h3>
                  <p>{popupProperties.model}</p>
                </div> // Inject your JSX
              }
            />
          </AzureMap>
        </div>
      </AzureMapsProvider>
    </>
  );
};

const Azuremap = () => {
  return (
    <div>
    <MarkersExample />
    </div>
  )
}

export default Azuremap
