import "./Abby.css"
function Abby(){
    const qualitys = ["Altruistic", "Caring", "Charismatic", "Compassionate", "Cooperative", "Courteous", "Creative", "Determined", "Empathetic", "Energetic", "Enthusiastic", "Fair", "Generous", "Genuine", "Grateful", "Honest", "Hopeful", "Humble", "Humorous", "Inspirational", "Joyful", "Kind Hearted", "Loyal", "Methodical", "Meticulous", "Modest", "Nurturing", "Observant", "Passionate", "Patient", "Perceptive", "Persistent", "Practical", "Quirky", "Radiant", "Reliable", "Resourceful", "Responsible", "Selfless", "Sincere", "Understanding"]
    const Traits =[
        {Trait: "Altruistic", Definition: "Devotes oneself to the well-being of others."},
        {Trait: "Caring", Definition: "Demonstrates care and concern for others needs."},
        {Trait: "Charismatic", Definition: "Radiates charm and charisma in interactions."},
        {Trait: "Compassionate", Definition: "Shows deep concern and care for others' well-being."},
        {Trait: "Cooperative", Definition: "Works well with others in a team."},
        {Trait: "Courteous", Definition: "Polite and considerate in interactions with others."},
        {Trait: "Creative", Definition: "Generates innovative and imaginative ideas."},
        {Trait: "Determined", Definition: "Possesses unwavering commitment and resolve."},
        {Trait: "Emphathetic", Definition: "Understands and shares the feelings of others."},
        {Trait: "Energetic", Definition: "Displays high levels of enthusiasm and vitality."},
        {Trait: "Enthusiastic", Definition: "Energetic and passionate about their pursuits."},
        {Trait: "Fair", Definition: "Treats others impartially and justly."},
        {Trait: "Generous", Definition: "Willing to give and share with others."},
        {Trait: "Genuine", Definition: "Authentic and true to oneself and others."},
        {Trait: "Grateful", Definition: "Acknowledges, appreciates and expresses thanks life's blessings."},
        {Trait: "Honest", Definition: "Truthful and starightforward in words and actions."},
        {Trait: "Hopeful", Definition: "Maintains unwavering optimism, inspriring resilience and belief in a brighter future."},
        {Trait: "Humble", Definition: "Modest and not overly proud."},
        {Trait: "Humorous", Definition: "Infuses joy through wit and cleverness, fostering laughter and merriment. Having a sense of humor."},
        {Trait: "Inspirational", Definition: "Motivates and uplifts others through words and actions."},
        {Trait: "Joyful", Definition: "Radiates happiness and positivity."},
        {Trait: "Kind Hearted", Definition: "Has a warm and benevolent nature."},
        {Trait: "Loyal", Definition: "Faithful and committed to friends and loved ones."},
        {Trait: "Methodical", Definition: "Approaches tasks with a systematic and organized mindset."},
        {Trait: "Meticulous", Definition: "Pays meticulous attention to detail."},
        {Trait: "Modest", Definition: "Displays humility and avoids self-promotion."},
        {Trait: "Nurturing", Definition: "Caring and supportive, especially in helping others grow."},
        {Trait: "Observant", Definition: "Pays attention to details and surroundings."},
        {Trait: "Passionate", Definition: "Expresses intese enthusiasm and fervor."},
        {Trait: "Patient", Definition: "Maintains composure and tolerance in challenging situations."},
        {Trait: "Perceptive", Definition: "Quick to notice and understand things."},
        {Trait: "Persitent", Definition: "Demonstrates determination in pursuing goals."},
        {Trait: "Practical", Definition: "Focuses on effective and realistic solutions."},
        {Trait: "Quirky", Definition: "Embraces individuality and uniqueness."},
        {Trait: "Radiant", Definition: "Radiates positivity, brightness, and warmth."},
        {Trait: "Reliable", Definition: "Consistently follows through on committments. Can be counted on and trusted."},
        {Trait: "Resourceful", Definition: "Finds effective and creative solutions in challenging situations."},
        {Trait: "Responsible", Definition: "Takes ownership of tasks and committments."},
        {Trait: "Selfless", Definition: "Puts the needs of of others before oneself."},
        {Trait: "Sincere", Definition: "Genuine, honest and heartfelt in intentions and expressions."},
        {Trait: "Understanding", Definition: "Shows empathy and insight into others' perspectives."},

    ];
    Traits.unshift({Trait: "This is a Test", Definition: "Test Def.!!!!"})
    return(
        <>
        <div className="header">
            <h1>What I like about Abby... (what I Love)</h1>
             
                <ul>
                <li>Abby has a big Heart (she cares about others, thinks about what they like and dislike, cares to note their needs and wants)</li>
                <li>She loves to write notes</li>
                <li>She has a sense of humor</li>
                <li>Words I would use to describe her 💘💗🧡</li>
                <ol>
                {Traits.map(({Trait, Definition}, idx) => <li key={idx}><b>{Trait}</b>: {Definition}</li>)}
                </ol>
                </ul>
            
        </div>
        </>
    )
}

export default Abby;