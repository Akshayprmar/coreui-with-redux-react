export const configurationFile = {
    production: {
      DOMAIN_NAME: "https://xyz.com",
      API_DOMAIN_NAME: "https://api.xyz.com"      
    },
    staging: {
      DOMAIN_NAME: "https://beta.xyz.com",
      API_DOMAIN_NAME: "https://alpha.xyz.com"
     
    },
    development: {
      DOMAIN_NAME: "http://localhost:3001",
      API_DOMAIN_NAME: "http://localhost:3000"
      
    },
    test: {
      DOMAIN_NAME: "http://localhost:3001",
      API_DOMAIN_NAME: "http://localhost:3000"     
    }
  };
  