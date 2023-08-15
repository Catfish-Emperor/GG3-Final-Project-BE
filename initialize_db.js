require("dotenv").config()
const { MongoClient } = require("mongodb");

const database = "gigihFinalProject";
const CLIENTMONGOSTRING = process.env.CLIENTMONGOSTRING
const client = new MongoClient(`${CLIENTMONGOSTRING}`);


const videos = [
    {
        videoId: "01",
        videoUrl : "https://www.youtube.com/embed/gjC6kYK8r6U",
        videoTitle : "BEST Gaming Keyboards of 2023",
        imageThumbnailUrl: "https://i.ytimg.com/vi/gjC6kYK8r6U/maxresdefault.jpg"
    },
    {
        videoId: "02",
        videoUrl : "https://www.youtube.com/embed/76YpmshmI5w",
        videoTitle : "The Best Gaming Mouse for Any Budget",
        imageThumbnailUrl: "https://i.ytimg.com/vi/76YpmshmI5w/maxresdefault.jpg"
    },
    {
        videoId: "03",
        videoUrl : "https://www.youtube.com/embed/kssFOBT3yuc",
        videoTitle : "Best Gaming Chairs 2023",
        imageThumbnailUrl: "https://i.ytimg.com/vi/kssFOBT3yuc/maxresdefault.jpg"
    },
    {
        videoId: "04",
        videoUrl : "https://www.youtube.com/embed/-wuMsb_QMq4", 
        videoTitle : "Best Gaming Laptops 2023",
        imageThumbnailUrl: "https://i.ytimg.com/vi/-wuMsb_QMq4/maxresdefault.jpg"
    },
    {
        videoId: "05",
        videoUrl : "https://www.youtube.com/embed/tHD7ykRghc4",
        videoTitle : "Best Gaming Headsets 2023",
        imageThumbnailUrl: "https://i.ytimg.com/vi/tHD7ykRghc4/maxresdefault.jpg"
    }
];

const products = [
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80",
        "title": "Thunderstrike Gaming Keyboard",
        "price": "Rp. 6,800,000",
        "videoId": "01"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "BlazeFury Gaming Keyboard",
        "price": "Rp. 7,900,000",
        "videoId": "01"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "RapidStrike Gaming Keyboard",
        "price": "Rp. 2,400,000",
        "videoId": "01"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "ViperMax Gaming Mouse",
        "price": "Rp. 4,200,000",
        "videoId": "02"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1632160871990-be30194885aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        "title": "SwiftGrip Gaming Mouse",
        "price": "Rp. 6,700,000",
        "videoId": "02"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1628832306751-ec751454119c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=945&q=80",
        "title": "SonicEdge Gaming Mouse",
        "price": "Rp. 5,800,000",
        "videoId": "02"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "ErgoLuxe Gaming Chair",
        "price": "Rp. 3,600,000",
        "videoId": "03"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1633545486613-feaf749f7805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        "title": "Titanium Gaming Chair",
        "price": "Rp. 7,300,000",
        "videoId": "03"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1612011213721-3936d387f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=638&q=80",
        "title": "LumoLux Gaming Chair",
        "price": "Rp. 4,900,000",
        "videoId": "03"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        "title": "NebulaX Gaming Laptop",
        "price": "Rp. 5,100,000",
        "videoId": "04"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1605134513573-384dcf99a44c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "title": "FireEdge Gaming Laptop",
        "price": "Rp. 6,300,000",
        "videoId": "04"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1627560270549-5c77fcde0ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHwy&auto=format&fit=crop&w=1000&q=60",
        "title": "ShadowStorm Gaming Laptop",
        "price": "Rp. 7,200,000",
        "videoId": "04"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
        "title": "CosmicWave Gaming Headset",
        "price": "Rp. 2,500,000",
        "videoId": "05"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1616081118936-562f7c13d9ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
        "title": "PulseWave Gaming Headset",
        "price": "Rp. 1,800,000",
        "videoId": "05"
    },
    {
        "productLink": "https://example.com",
        "productImg": "https://images.unsplash.com/photo-1629429407756-4a7703614972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60",
        "title": "EchoWave Gaming Headset",
        "price": "Rp. 2,700,000",
        "videoId": "05"
    }
];

const comments = [
    {
        userName: "User 1",
        comment: "Comment from User 1 about video 01",
        timeStamp: new Date(),
        videoId: "01"
    },
    {
        userName: "User 2",
        comment: "Comment from User 2 about video 02",
        timeStamp: new Date(),
        videoId: "02"
    },
    {
        userName: "User 3",
        comment: "Comment from User 3 about video 03",
        timeStamp: new Date(),
        videoId: "03"
    },
    {
        userName: "User 4",
        comment: "Comment from User 4 about video 04",
        timeStamp: new Date(),
        videoId: "04"
    },
    {
        userName: "User 5",
        comment: "Comment from User 5 about video 05",
        timeStamp: new Date(),
        videoId: "05"
    }
];


async function initializeDatabase() {
    try {
        await client.connect();
        const db = client.db(database);

        await db.collection("videos").insertMany(videos);
        await db.collection("products").insertMany(products);
        await db.collection("comments").insertMany(comments);

        console.log("Database for the simple Tokopedia Play Clone app has been initialized");
    } catch (err) {
        console.error("Initialize database error", err);
    } finally {
        client.close();
    }
}

initializeDatabase();
