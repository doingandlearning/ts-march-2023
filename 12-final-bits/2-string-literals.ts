type World = "world" | "BBC" | "Sky";
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";

type Greeting = Hello | Goodbye;

type Salutation = `${Greeting} ${World}`;

type domains = "sport" | "iplayer" | "news";

type allowed_urls = `https://${domains}.bbc.co.uk`;
