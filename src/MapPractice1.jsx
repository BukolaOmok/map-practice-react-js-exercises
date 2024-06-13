import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);

    const emojiDisplay = emojisArray.map(emoji => {
      return  <>{emoji}</>;
    });

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList"> {emojiDisplay} </div>
        </div>
    );
}
