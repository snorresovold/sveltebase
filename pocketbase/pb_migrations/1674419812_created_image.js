migrate((db) => {
  const collection = new Collection({
    "id": "k3if50wi3hugy94",
    "created": "2023-01-22 20:36:52.052Z",
    "updated": "2023-01-22 20:36:52.052Z",
    "name": "image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bpshr37z",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8bpyfajr",
        "name": "image_url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "7moigmjn",
        "name": "product",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "1ji4zfjf24d97yb",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94");

  return dao.deleteCollection(collection);
})
