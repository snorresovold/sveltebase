migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
