import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.isj.PublicOne',
  appName: 'SmartFarmPublicOne',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    CapacitorHttp:{
      enabled:true
    }
  }
};

export default config;
