import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../page";

export const metadata: Metadata = { title: "What Makes a Reader?", description: "A guide to reading development for international school parents by Dr. Jenn Overstreet." };

export default function Article() {
  return (
    <>
      <Header />
      <main className="article-page" id="main-content">
        <header className="article-hero">
          <p className="eyebrow">Reading development · 12 min read</p>
          <h1>What Makes a Reader?</h1>
          <p className="article-deck">A guide to reading development for international school parents.</p>
          <p className="article-byline">By Dr. Jenn Overstreet</p>
        </header>
        <article className="article-body">
          <p className="article-lead">What makes someone a reader?</p>
          <p>I’ve spent more than 15 years watching children learn to read.</p>
          <p>I’ve watched it as a classroom teacher, sitting beside a child while they worked their way through a word they could not yet read. I’ve watched it as an instructional coach, looking across classrooms and assessment data and trying to understand why one child was taking off while another seemed to be working twice as hard for half the progress. I’ve watched it as a school leader, where conversations about reading often become conversations about curriculum, instruction, intervention, assessment, and what we do when a child is not learning as expected.</p>
          <p>And now, through Bright Spiral Literacy, I work directly with children and families trying to answer a question that sounds simple but rarely is:</p>
          <blockquote>What is happening when this child reads?</blockquote>
          <p>We use the word <em>reader</em> all the time. “She’s already a reader.” “He can read. He just doesn’t like it.” “She’s reading above grade level.”</p>
          <p>The more years I spend doing this work, the less interested I am in the label of reader by itself. I want to know what we mean.</p>
          <h2>Being able to read the words is only part of reading</h2>
          <p>I have worked with children who can read an entire page aloud and leave me with a long list of questions about their reading. I have also worked with children who read slowly and carefully but understand far more than you might assume from listening to them.</p>
          <p>Reading requires children to do at least two big jobs at once. They need to identify the words on the page, and they need to understand the language those words create. One child may understand complex stories when someone reads aloud but struggle to read the same kind of text independently. Another may read every word accurately and still have little idea what they have read.</p>
          <p>Both children might be described as struggling readers. They do not need the same thing.</p>
          <p id="everything-after-just">This is why I get a little twitchy when someone says, “He can read. He just…” He just hates it. He just guesses sometimes. He just doesn’t understand what he reads. He just takes forever.</p>
          <blockquote>Everything after the “just” is usually the part I want to know more about.</blockquote>
          <p>Phonics matters enormously, but the research on reading is much broader. Children need to learn how the written code works. They also need fluency, vocabulary, knowledge, language, and comprehension. I am not looking for one skill. I am looking at a system that develops over time.</p>
          <h2>What does being a reader look like at five or six?</h2>
          <p>Depending on where your child goes to school, five might mean Reception, Kindergarten, the final year of early childhood education, or something else entirely. Two children of the same age might be in systems with different expectations and approaches to early reading instruction.</p>
          <p>Still, if a child is learning to read English, they need to begin understanding how spoken language connects to print. They learn that words are made of individual sounds, that letters and groups of letters represent those sounds, and how to blend and segment those sounds for reading and spelling.</p>
          <p>At first, this takes effort. Over time, with effective instruction and practice, it should become increasingly accurate and efficient. I am less interested in how many familiar books a young child appears to “read” and more interested in what happens when they meet something unfamiliar. Can they use what they know? Are they building on previous learning? Are they making progress with the instruction they receive?</p>
          <p>Children develop at different rates. I believe that. I also think it is one of those completely true statements sometimes used to avoid harder questions.</p>
          <blockquote>Waiting is not an effective instructional plan.</blockquote>
          <h2>The job changes</h2>
          <p>We talk about children “learning to read” as though there is a moment when the job is finished. They crack the code, we hand them a chapter book, and off they go. If only it were that simple.</p>
          <p>The words get longer. Spelling patterns become more complex. Vocabulary changes. Sentences become harder to follow. Pictures become less useful. Eventually, children are expected to read about the water cycle, ancient civilizations, fractions, and whatever else appears on Tuesday’s schedule.</p>
          <p>This is often when I hear, “But they used to be a good reader.” Sometimes the reading has finally become difficult enough to expose something the child had been working around for a long time. It does not necessarily mean something suddenly went wrong. The job changed.</p>
          <h2>For international school children, the path is rarely neat</h2>
          <p>A child might learn early phonics in a British school in Dubai, move to an IB school in Singapore, and arrive a few years later at an American school in Rome. Another might begin reading in Spanish, move into English-medium instruction, and continue speaking and reading in both languages at home.</p>
          <p>One school may teach reading skills in one sequence. Another may reasonably assume a concept was taught two years ago. None of this automatically means a school failed the child. But instructional history matters.</p>
          <p>The answer is not always a problem with the child. Sometimes there is simply a gap. Regardless of how it got there, we still need to find it.</p>
          <h2>Multilingual children add another layer</h2>
          <p>A multilingual child is not several monolingual children living in the same body. Their vocabulary may be distributed across languages. They may know a concept in Italian but not yet know its English name. They may read more accurately in one language because its relationship between letters and sounds is more consistent.</p>
          <p>I do not want to treat multilingualism as the cause of every reading difficulty. I also do not want to dismiss a persistent difficulty because a child is multilingual. Multilingualism should help us ask better questions rather than become the explanation for everything.</p>
          <h2>The question I wish more parents would ask</h2>
          <p>Parents are often pushed toward a yes-or-no question: Is my child a reader?</p>
          <p>I think there is a better place to begin. What is happening when my child reads?</p>
          <p>A strong reader is not simply a child who started early. It is not automatically the child holding the thickest book. Reading develops. The work changes. The demands grow. Different languages and educational experiences shape the journey.</p>
          <blockquote>Your child is becoming a reader.</blockquote>
          <p>The useful questions are what is developing, what is getting stronger, and whether anything is getting in the way. If something is getting in the way, that is where I want to look closer.</p>
        </article>
        <aside className="article-cta"><p className="eyebrow light">If something does not add up</p><h2>You know your child. Let’s put language around what you are seeing.</h2><Link className="button button-yellow" href="https://stan.store/brightspiralliteracy">Choose your next step <span>↗</span></Link></aside>
      </main>
      <Footer />
    </>
  );
}
