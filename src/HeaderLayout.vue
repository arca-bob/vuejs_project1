<template>

    <header>
        <RouterLink to="/"><img src="../logo.png" alt="home"width="45" id = "headericon"></RouterLink>
        <RouterLink to="/login"><img src="../user.svg" alt="user"width="30"></RouterLink> 
        •
        <RouterLink to="/cart"><img src="../shopping-cart.svg" alt="panier" width="30"></RouterLink> 
        
        <form action="recherche.php" method="get" id="headersearch">
            <div class="headerSearch">
                <input type="text" placeholder="Rechercher un produit..."id="recherche">
            </div>
            <img src="../search.svg" width="25px" alt="recherche" id="recherche2">
        </form>
        </header>
</template>

<style>


header {
    position: sticky;
    width: 80%;
    padding-top: 20px;
    margin-top: 20px;
    margin-left: 10%;
    background-color: lightgrey;
    flex-wrap: wrap;
    justify-content: space-evenly;
    display: flex;
    top: 0;
    text-decoration: none;
    border-radius: 100px;

}
#headericon {
    margin-right: 90px;
    padding-bottom: 20px;
}
#headersearch {
    height: 50%;
    width: 20%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 50px;

}




#recherche {
    height: 100%;
    width: 84%;
    margin: 10%;
    border: none;
    background-color: white;
    
}
#recherche2 {
    height: 1%;
    margin: 5%;
}


</style>