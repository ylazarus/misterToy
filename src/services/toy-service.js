import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"

const KEY = "toys_db"
// _createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy._id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    name: "",
    price: 0,
    labels: "",
    reviews: [],
    inStock: true,
  }
}

function _createLabels() {
  const allLabels = [
    "On wheels",
    "Box game",
    "Art",
    "Baby",
    "Doll",
    "Puzzle",
    "Outdoor",
  ]
  const labels = []
  for (let i = 0; i < 3; i++) {
    const num = utilService.getRandomIntInclusive(0, allLabels.length - 1)
    if (labels.includes(allLabels[num])) continue
    labels.push(allLabels[num])
  }
  return labels
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: "3397",
        reviews: [],
        name: "eros non",
        price: 83,
        labels: _createLabels(),
        createdAt: "1983-12-06T10:47:42.956Z",
        inStock: true,
      },
      {
        _id: "3398",
        reviews: [],
        name: "vitae malesuada",
        price: 100,
        labels: _createLabels(),
        createdAt: "1981-10-14T14:10:49.633Z",
        inStock: true,
      },
      {
        _id: "3399",
        reviews: [],
        name: "et lacus",
        price: 69,
        labels: _createLabels(),
        createdAt: "1994-11-07T02:32:56.395Z",
        inStock: true,
      },
      {
        _id: "3400",
        reviews: [],
        name: "convallis nec",
        price: 56,
        labels: _createLabels(),
        createdAt: "1995-09-18T05:00:44.763Z",
        inStock: false,
      },
      {
        _id: "3401",
        reviews: [],
        name: "sed odio",
        price: 77,
        labels: _createLabels(),
        createdAt: "1997-02-10T08:58:13.432Z",
        inStock: false,
      },
      {
        _id: "3402",
        reviews: [],
        name: "nunc vel",
        price: 65,
        labels: _createLabels(),
        createdAt: "1997-02-08T11:00:00.586Z",
        inStock: true,
      },
      {
        _id: "3403",
        reviews: [],
        name: "ac pulvinar",
        price: 81,
        labels: _createLabels(),
        createdAt: "1981-04-28T02:30:36.186Z",
        inStock: false,
      },
      {
        _id: "3404",
        reviews: [],
        name: "eros quis",
        price: 28,
        labels: _createLabels(),
        createdAt: "1997-04-09T09:41:56.270Z",
        inStock: false,
      },
      {
        _id: "3405",
        reviews: [],
        name: "sed consequat",
        price: 61,
        labels: _createLabels(),
        createdAt: "1973-03-22T12:32:33.909Z",
        inStock: false,
      },
      {
        _id: "3406",
        reviews: [],
        name: "pharetra sit",
        price: 80,
        labels: _createLabels(),
        createdAt: "1988-05-18T06:33:36.993Z",
        inStock: false,
      },
      {
        _id: "3407",
        reviews: [],
        name: "tortor neque",
        price: 51,
        labels: _createLabels(),
        createdAt: "1974-06-17T19:30:09.200Z",
        inStock: false,
      },
      {
        _id: "3408",
        reviews: [],
        name: "turpis adipiscing",
        price: 22,
        labels: _createLabels(),
        createdAt: "1994-09-09T00:52:44.934Z",
        inStock: true,
      },
      {
        _id: "3409",
        reviews: [],
        name: "mattis ac",
        price: 74,
        labels: _createLabels(),
        createdAt: "1990-05-25T22:47:18.320Z",
        inStock: true,
      },
      {
        _id: "3410",
        reviews: [],
        name: "et mattis",
        price: 83,
        labels: _createLabels(),
        createdAt: "1987-04-20T23:23:46.325Z",
        inStock: true,
      },
      {
        _id: "3411",
        reviews: [],
        name: "massa et",
        price: 59,
        labels: _createLabels(),
        createdAt: "1994-06-19T02:05:51.870Z",
        inStock: false,
      },
      {
        _id: "3412",
        reviews: [],
        name: "tempor consectetur",
        price: 62,
        labels: _createLabels(),
        createdAt: "1984-01-20T15:34:13.681Z",
        inStock: true,
      },
      {
        _id: "3413",
        reviews: [],
        name: "at sollicitudin",
        price: 41,
        labels: _createLabels(),
        createdAt: "1980-04-07T12:09:44.157Z",
        inStock: true,
      },
      {
        _id: "3414",
        reviews: [],
        name: "curabitur pretium",
        price: 8,
        labels: _createLabels(),
        createdAt: "1983-12-05T17:26:37.787Z",
        inStock: true,
      },
      {
        _id: "3415",
        reviews: [],
        name: "sapien vel",
        price: 47,
        labels: _createLabels(),
        createdAt: "1989-11-27T01:26:29.676Z",
        inStock: true,
      },
      {
        _id: "3416",
        reviews: [],
        name: "lacus suspendisse",
        price: 6,
        labels: _createLabels(),
        createdAt: "1981-11-24T18:21:06.202Z",
        inStock: true,
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
