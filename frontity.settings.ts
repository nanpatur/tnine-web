import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "@frontity/mars-theme-typescript/types";

const settings: Settings<Theme | WpSource> = {
  "name": "frontity-web",
  "state": {
    "frontity": {
      "url": "https://tnineprojectcontent.wordpress.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme-typescript",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Tentang",
              "/tentang/"
            ],
            [
              "Kontak",
              "/kontak/"
            ],
            [
              "Blog",
              "/blog/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://tnineprojectcontent.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
