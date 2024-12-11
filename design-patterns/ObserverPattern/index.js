// Subject: WeatherStation
class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    // Add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Set temperature and notify observers
    setTemperature(temp) {
        console.log(`WeatherStation: New temperature is ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();
    }

    // Notify all observers about the temperature change
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }
}

// Observer: TemperatureDisplay
class TemperatureDisplay {
    update(temperature) {
        console.log(`TemperatureDisplay: Temperature is now ${temperature}°C`);
    }
}

// Observer: AirConditioner
class AirConditioner {
    update(temperature) {
        if (temperature > 25) {
            console.log('AirConditioner: Turning on...');
        } else {
            console.log('AirConditioner: Turning off...');
        }
    }
}

// Usage
const weatherStation = new WeatherStation();

// Create observers
const tempDisplay = new TemperatureDisplay();
const airConditioner = new AirConditioner();

// Register observers
weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(airConditioner);

// Change temperature
weatherStation.setTemperature(22);
weatherStation.setTemperature(28);

// Remove one observer and change temperature again
weatherStation.removeObserver(tempDisplay);
weatherStation.setTemperature(18);
