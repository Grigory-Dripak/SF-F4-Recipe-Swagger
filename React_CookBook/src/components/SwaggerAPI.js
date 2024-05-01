import * as React from "react";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


export default function SwaggerAPI() {
    return (
        <SwaggerUI url="\openapi.yaml"/>    
    )
};