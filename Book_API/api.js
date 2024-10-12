const baseUrl="https://simple-books-api.glitch.me"

// *****************Get Status*************

async function getStatus() {
    const res= await fetch(`${baseUrl}/status`)
    

    if (!res.ok) {
       throw new Error(`Could not fetch , status ${res.status}`);
          
    }

    const status=await res.json()
    console.log(status);
    
}

// getStatus()


// *****************Get Status*************

async function getAllBooks() {
    const res= await fetch(`${baseUrl}/books/1`)
    

    if (!res.ok) {
       throw new Error(`Could not fetch , status ${res.status}`);
          
    }

    const status=await res.json()
    console.log(status);
    
}

// getAllBooks()

