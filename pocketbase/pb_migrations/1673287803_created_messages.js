migrate((db) => {
  const collection = new Collection({
    "id": "w3zcc1vj1qpie5w",
    "created": "2023-01-09 18:10:03.227Z",
    "updated": "2023-01-09 18:10:03.227Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bai6izpm",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("w3zcc1vj1qpie5w");

  return dao.deleteCollection(collection);
})
