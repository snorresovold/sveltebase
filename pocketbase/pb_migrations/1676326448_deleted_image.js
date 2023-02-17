migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "k3if50wi3hugy94",
    "created": "2023-01-22 20:36:52.052Z",
    "updated": "2023-01-26 21:09:56.074Z",
    "name": "image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8bpyfajr",
        "name": "url",
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
        "id": "zqy7olnb",
        "name": "thumbnail",
        "type": "bool",
        "required": false,
        "unique": true,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
