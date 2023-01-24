migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w3zcc1vj1qpie5w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "w3zcc1vj1qpie5w",
    "created": "2023-01-09 18:10:03.227Z",
    "updated": "2023-01-09 18:12:04.784Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bai6izpm",
        "name": "text",
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
        "id": "nybxmakk",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": " user = @request.auth.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})