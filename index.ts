// sample URL : https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@engrmuhammadusman108

export const MediumArticles = () => {
    const error = {
        "message" : "Invalid username..."
    }

    const getBaseURL = (username:string) => {
        return `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
    };

    const getData = async (username:string) => {
        try {
            // Make the GET request using fetch
            const response = await fetch(getBaseURL(username));

            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                // Throw an error if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const data = await response.json();
            // Return the data
            return data;

        } catch (error) {
            // Handle errors that occurred during the fetch call
            console.error('An error occurred while fetching data');
            return 'An error occurred while fetching data';
        }
    };

    const checkError = (response: any) => {
        if (response?.status === "ok") {
            return false;
        } else {
            return true;
        }
    };
    
    const getProfileUrl = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.feed.url;
        } catch (error) {
            console.error('An error occurred while getting profile URL:', error);
            throw error;
        }
    };
    
    const getProfileTitle = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.feed.title;
        } catch (error) {
            console.error('An error occurred while getting profile title:', error);
            throw error;
        }
    };
    
    const getProfileAuthor = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.feed.author;
        } catch (error) {
            console.error('An error occurred while getting profile author:', error);
            throw error;
        }
    };
    
    const getProfileDescription = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.feed.description;
        } catch (error) {
            console.error('An error occurred while getting profile description:', error);
            throw error;
        }
    };
    
    const getProfileImageUrl = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.feed.image;
        } catch (error) {
            console.error('An error occurred while getting profile image URL:', error);
            throw error;
        }
    };
    
    const getLatestArticleTitle = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.items[0].title;
        } catch (error) {
            console.error('An error occurred while getting latest article title:', error);
            throw error;
        }
    };
    
    const getLatestArticlePublicationDate = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.items[0].pubDate;
        } catch (error) {
            console.error('An error occurred while getting latest article publication date:', error);
            throw error;
        }
    };
    
    const getLatestArticleUrl = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.items[0].link;
        } catch (error) {
            console.error('An error occurred while getting latest article URL:', error);
            throw error;
        }
    };
    
    const getLatestArticleDescription = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.items[0].description;
        } catch (error) {
            console.error('An error occurred while getting latest article description:', error);
            throw error;
        }
    };
    
    const getLatestArticle = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            return data.items[0];
        } catch (error) {
            console.error('An error occurred while getting latest article:', error);
            throw error;
        }
    };
    
    const getLatestArticlesTitle = async (username:string) => {
        try {
            const data = await getData(username);
            if (checkError(data)) {
                return error.message;
            }
            const res:any = [];
            for (let i = 0; i < data.items.length; i++) {
                res.push(data.items[i].title);
            }
            return res;
        } catch (error) {
            console.error('An error occurred while getting latest article title:', error);
            throw error;
        }  
    };
  
    return {
        getData,
        getProfileUrl,
        getProfileTitle,
        getProfileAuthor,
        getProfileDescription,
        getProfileImageUrl,
        getLatestArticleTitle,
        getLatestArticlePublicationDate,
        getLatestArticleUrl,
        getLatestArticleDescription,
        getLatestArticle,
        getLatestArticlesTitle
    };
  };