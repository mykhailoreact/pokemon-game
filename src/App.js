import HeaderBlock from './components/HeaderBlock';
import LayoutBlock from './components/LayoutBlock';
import FooterBlock from './components/FooterBlock';
import PokemonCardBlock from "./components/PokemonCardBlock";

import './App.css';

import firstImg from './assets/bg1.jpg';
import secondImg from './assets/bg2.jpg';

import Pokemons from './data/pokemons.json';

const App = () => {
    return (
        <>
            <HeaderBlock 
                title = "Header Title"
                descr = "Deader Desc"
            />
            <LayoutBlock 
                title = "Layout Title1"
                descr = "Layout Desc1"
                urlBg = {firstImg}
            >
                <div>
                    <p> In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                    <p> Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

                    <p> To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
                </div>
            </LayoutBlock>
            <LayoutBlock 
                title = "Layout Title2"
                descr = "Layout Desc2"
                colorBg = "red"
            >
                <div className="flex">
                    {
                        Pokemons.map((item, index) => <PokemonCardBlock
                            key={item.id}
                            type={item.type}
                            values={item.values}
                            img={item.img}
                            name={item.name}
                            id={item.id}
                        />)
                    }
                </div>
            </LayoutBlock>

            <LayoutBlock 
                title = "Layout Title3"
                descr = "Layout Desc3"
                urlBg = {secondImg}
            >
                <div>
                    <p> In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                    <p> Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

                    <p> To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
                </div>
            </LayoutBlock>
            <FooterBlock />
        </>
    );
}

export default App;
