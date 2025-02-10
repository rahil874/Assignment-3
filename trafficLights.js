function trafficLightControl(density) {
    
    if (density === 'Heavy') {
        return "Green For 60 seconds"
    }
    else if (density === 'Moderate') {
      return "Green For 40 seconds";
    }
    else if (density === 'Light') {
      return "Green For 20 seconds";
    }
    else {
        return "Invalid Traffic Density"
    }
}

console.log(trafficLightControl("Light"));