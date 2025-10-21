"use client";

import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		// Add the script for handling interactions
		const script = document.createElement("script");
		script.innerHTML = `
			let conversationStep = 0;
			let userStruggles = [];

			window.startAssessment = function() {
				const bubbleScreen = document.getElementById('bubbleScreen');
				const chatInterface = document.getElementById('chatInterface');

				// Fade out the bubble screen completely
				bubbleScreen.classList.add('fade-out');

				setTimeout(() => {
					bubbleScreen.style.display = 'none';
					chatInterface.classList.remove('hidden');
					chatInterface.classList.add('fade-in');

					// Start conversation
					setTimeout(() => {
						addAIMessage("What's up. I'm here to help you figure it out.");
						setTimeout(() => {
							addAIMessage("Dump your thoughts. Let's go!");
						}, 800);
					}, 300);
				}, 500);
			}

			window.sendMessage = function() {
				const input = document.getElementById('userInput');
				const message = input.value.trim();

				if (!message) return;

				// Create floating message effect
				createFloatingMessage(message, input);

				addUserMessage(message);
				input.value = '';

				userStruggles.push(message);

				setTimeout(() => {
					showTypingIndicator();

					setTimeout(() => {
						removeTypingIndicator();
						handleAIResponse(message);
					}, 1500);
				}, 500);
			}

			function createFloatingMessage(text, inputElement) {
				const floatingMsg = document.createElement('div');
				floatingMsg.className = 'floating-message';
				floatingMsg.innerHTML = \`
					<div class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
						\${text}
					</div>
				\`;

				// Position relative to input
				const rect = inputElement.getBoundingClientRect();
				floatingMsg.style.left = rect.left + 'px';
				floatingMsg.style.top = rect.top + 'px';

				document.body.appendChild(floatingMsg);

				// Remove after animation
				setTimeout(() => {
					floatingMsg.remove();
				}, 2000);
			}

			function addUserMessage(text) {
				const container = document.getElementById('chatContainer');
				const messageDiv = document.createElement('div');
				messageDiv.className = 'chat-bubble';
				messageDiv.innerHTML = \`
					<div class="user-bubble">
						<p>\${text}</p>
					</div>
				\`;
				container.appendChild(messageDiv);
				container.scrollTop = container.scrollHeight;
			}

			function addAIMessage(text) {
				const container = document.getElementById('chatContainer');
				const messageDiv = document.createElement('div');
				messageDiv.className = 'chat-bubble';
				messageDiv.innerHTML = \`
					<div class="ai-bubble">
						<p class="font-medium">\${text}</p>
					</div>
				\`;
				container.appendChild(messageDiv);
				container.scrollTop = container.scrollHeight;
			}

			function showTypingIndicator() {
				const container = document.getElementById('chatContainer');
				const typingDiv = document.createElement('div');
				typingDiv.id = 'typingIndicator';
				typingDiv.className = 'chat-bubble';
				typingDiv.innerHTML = \`
					<div class="ai-bubble">
						<div class="typing-indicator flex gap-1 justify-center">
							<span class="rounded-full"></span>
							<span class="rounded-full"></span>
							<span class="rounded-full"></span>
						</div>
					</div>
				\`;
				container.appendChild(typingDiv);
				container.scrollTop = container.scrollHeight;
			}

			function removeTypingIndicator() {
				const indicator = document.getElementById('typingIndicator');
				if (indicator) indicator.remove();
			}

			function handleAIResponse(userMessage) {
				conversationStep++;

				if (conversationStep === 1) {
					const response = analyzeStruggle(userMessage);
					addAIMessage(response);
				} else if (conversationStep === 2) {
					addAIMessage("Got it. Based on what you told me, I'm building a custom assessment just for you.");

					setTimeout(() => {
						addAIMessage("This'll take 2 minutes. Answer based on what actually happens in games, not what you think the right answer is.");

						setTimeout(() => {
							transitionToAnalyzing();
						}, 2000);
					}, 1500);
				}
			}

			function analyzeStruggle(message) {
				const lowerMsg = message.toLowerCase();

				if (lowerMsg.includes('confidence') || lowerMsg.includes('freeze') || lowerMsg.includes('pressure')) {
					return "So it's a mental thing. You know you got the skill, but something happens when it matters. When you're in practice vs games, how different do you play?";
				} else if (lowerMsg.includes('decision') || lowerMsg.includes('read') || lowerMsg.includes('iq')) {
					return "Sounds like you're second-guessing your reads. That's usually about processing speed. When you're out there, are you thinking too much or reacting on instinct?";
				} else if (lowerMsg.includes('small') || lowerMsg.includes('short') || lowerMsg.includes('size') || lowerMsg.includes('height')) {
					return "Height thing. Every undersized guard who made it dealt with that. But the ones who broke through stopped trying to play like they're 6'5\". What part of your game do coaches actually criticize besides your height?";
				} else {
					return "I hear you. A lot of guards deal with that. Before we dive deeper - is this more of a mental block you're fighting, or a skill gap you're trying to fix?";
				}
			}

			function transitionToAnalyzing() {
				const chatInterface = document.getElementById('chatInterface');
				const analyzingScreen = document.getElementById('analyzingScreen');

				chatInterface.classList.add('fade-out');

				setTimeout(() => {
					chatInterface.style.display = 'none';
					analyzingScreen.classList.remove('hidden');
					analyzingScreen.classList.add('fade-in');

					// After 3 seconds, show typeform
					setTimeout(() => {
						transitionToTypeform();
					}, 3000);
				}, 500);
			}

			function transitionToTypeform() {
				const analyzingScreen = document.getElementById('analyzingScreen');
				const typeformContainer = document.getElementById('typeformContainer');

				analyzingScreen.classList.add('fade-out');

				setTimeout(() => {
					analyzingScreen.style.display = 'none';
					typeformContainer.classList.remove('hidden');
				}, 500);
			}

			window.simulateQuizComplete = function() {
				alert('Quiz complete! Typeform would redirect back with scores like:\\nyoursite.com?decision=68&awareness=72&pressure=54\\n\\nThen you show the scorecard.');
			}

			// Enter key to send
			document.addEventListener('DOMContentLoaded', () => {
				const input = document.getElementById('userInput');
				if (input) {
					input.addEventListener('keypress', (e) => {
						if (e.key === 'Enter') sendMessage();
					});
				}
			});
		`;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<style jsx global>{`
				body {
					background: #6b7280;
					font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
					overflow-x: hidden;
				}

				/* Real Soap Bubble with Iridescence */
				.bubble-3d {
					position: relative;
					width: 400px;
					height: 400px;
					border-radius: 50%;
					cursor: pointer;
					transition: transform 0.3s ease;
					z-index: 5;
					animation: float 6s ease-in-out infinite;
					/* Real soap bubble appearance */
					background:
						radial-gradient(circle at 20% 20%,
							rgba(255, 255, 255, 0.9) 0%,
							rgba(200, 220, 255, 0.6) 15%,
							rgba(255, 200, 220, 0.5) 30%,
							rgba(220, 255, 200, 0.4) 45%,
							rgba(255, 220, 200, 0.3) 60%,
							rgba(200, 200, 255, 0.2) 75%,
							transparent 90%),
						radial-gradient(circle at 80% 30%,
							rgba(255, 200, 255, 0.7) 0%,
							rgba(200, 255, 255, 0.5) 25%,
							rgba(255, 255, 200, 0.4) 50%,
							transparent 75%),
						radial-gradient(circle at 30% 70%,
							rgba(200, 255, 200, 0.6) 0%,
							rgba(255, 200, 200, 0.4) 35%,
							rgba(220, 220, 255, 0.3) 70%,
							transparent 90%);
					/* Subtle shadow for depth */
					box-shadow:
						0 20px 60px rgba(0, 0, 0, 0.1),
						0 10px 30px rgba(0, 0, 0, 0.05),
						inset 0 0 0 1px rgba(255, 255, 255, 0.3);
				}

				/* Multiple iridescent highlights */
				.bubble-3d::before {
					content: '';
					position: absolute;
					top: 15%;
					left: 25%;
					width: 25%;
					height: 25%;
					background: radial-gradient(circle,
						rgba(255, 255, 255, 0.9) 0%,
						rgba(200, 220, 255, 0.7) 30%,
						rgba(255, 200, 220, 0.5) 60%,
						transparent 100%);
					border-radius: 50%;
					filter: blur(1px);
				}

				.bubble-3d::after {
					content: '';
					position: absolute;
					top: 60%;
					right: 20%;
					width: 20%;
					height: 20%;
					background: radial-gradient(circle,
						rgba(255, 255, 255, 0.8) 0%,
						rgba(220, 255, 200, 0.6) 40%,
						rgba(255, 220, 200, 0.4) 70%,
						transparent 100%);
					border-radius: 50%;
					filter: blur(1px);
				}

				/* Additional iridescent spots */
				.bubble-3d {
					background-image:
						radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.9) 0%, transparent 30%),
						radial-gradient(circle at 85% 25%, rgba(200, 220, 255, 0.7) 0%, transparent 40%),
						radial-gradient(circle at 25% 75%, rgba(255, 200, 220, 0.6) 0%, transparent 35%),
						radial-gradient(circle at 75% 85%, rgba(220, 255, 200, 0.5) 0%, transparent 30%),
						radial-gradient(circle at 50% 10%, rgba(255, 220, 200, 0.8) 0%, transparent 25%),
						radial-gradient(circle at 90% 60%, rgba(200, 200, 255, 0.6) 0%, transparent 35%);
				}

				@keyframes float {
					0%, 100% { transform: translateY(0) scale(1) rotateY(0deg); }
					50% { transform: translateY(-20px) scale(1.01) rotateY(2deg); }
				}

				.bubble-3d:hover {
					transform: scale(1.03) rotateY(1deg);
				}

				/* Bubble Pop Animation */
				.bubble-pop {
					animation: bubblePop 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
				}

				@keyframes bubblePop {
					0% {
						transform: scale(1) rotateY(0deg);
						opacity: 1;
					}
					30% {
						transform: scale(1.3) rotateY(10deg);
						opacity: 0.8;
					}
					60% {
						transform: scale(0.8) rotateY(-5deg);
						opacity: 0.6;
					}
					100% {
						transform: scale(0) rotateY(180deg);
						opacity: 0;
					}
				}

				/* Glassmorphism Chat Container - Removed */
				.glass-container {
					background: transparent;
					backdrop-filter: none;
					border: none;
					box-shadow: none;
				}

				/* Chat Bubbles - Centered and ChatGPT Style */
				.chat-bubble {
					position: relative;
					animation: gameFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					transform-origin: center;
					z-index: 10;
					display: flex;
					justify-content: center;
				}

				@keyframes gameFadeIn {
					0% {
						opacity: 0;
						transform: translateY(100px) scale(0.3) rotateX(90deg);
						filter: blur(10px);
					}
					30% {
						opacity: 0.3;
						transform: translateY(50px) scale(0.6) rotateX(45deg);
						filter: blur(5px);
					}
					70% {
						opacity: 0.8;
						transform: translateY(10px) scale(0.9) rotateX(10deg);
						filter: blur(1px);
					}
					100% {
						opacity: 1;
						transform: translateY(0) scale(1) rotateX(0deg);
						filter: blur(0);
					}
				}

				.user-bubble {
					background: none;
					color: #000000;
					box-shadow: none;
					position: relative;
					border: none;
					padding: 12px 20px;
					margin: 8px 0;
				}

				.user-bubble p {
					background: #f7f7f8;
					padding: 12px 16px;
					border-radius: 18px;
					margin: 0;
					font-size: 16px;
					line-height: 1.5;
					border: 1px solid #e5e5e5;
					text-align: center;
				}

				.ai-bubble {
					background: none;
					color: #000000;
					backdrop-filter: none;
					box-shadow: none;
					position: relative;
					border: none;
					padding: 12px 20px;
					margin: 8px 0;
				}

				.ai-bubble p {
					background: #ffffff;
					padding: 12px 16px;
					border-radius: 18px;
					margin: 0;
					font-size: 16px;
					line-height: 1.5;
					border: 1px solid #e5e5e5;
					color: #000000;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				/* Floating Message Effect */
				.floating-message {
					position: absolute;
					pointer-events: none;
					z-index: 20;
					animation: floatToBubble 2s ease-out forwards;
				}

				@keyframes floatToBubble {
					0% {
						opacity: 1;
						transform: translateY(0) scale(1) rotate(0deg);
					}
					50% {
						opacity: 0.8;
						transform: translateY(-50px) scale(1.1) rotate(5deg);
					}
					100% {
						opacity: 0;
						transform: translateY(-100px) scale(0.8) rotate(10deg);
					}
				}

				/* Typing Indicator - ChatGPT Style */
				.typing-indicator span {
					animation: bounce 1.4s infinite;
					background-color: #000000;
					width: 8px;
					height: 8px;
				}

				.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
				.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

				@keyframes bounce {
					0%, 60%, 100% { transform: translateY(0); }
					30% { transform: translateY(-10px); }
				}

				/* Transition Animations */
				.fade-out {
					animation: fadeOut 0.5s ease forwards;
				}

				.fade-in {
					animation: fadeIn 0.5s ease forwards;
				}

				@keyframes fadeOut {
					to { opacity: 0; transform: scale(0.95); }
				}

				@keyframes fadeIn {
					from { opacity: 0; transform: scale(0.95); }
					to { opacity: 1; transform: scale(1); }
				}

				/* Initial page load fade-in animation */
				.page-load-fade {
					opacity: 0;
					animation: pageLoadFadeIn 1.5s ease-out forwards;
				}

				@keyframes pageLoadFadeIn {
					0% {
						opacity: 0;
						transform: translateY(30px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Input Glow */
				.input-glow:focus {
					box-shadow: 0 0 0 3px rgba(131, 56, 236, 0.4),
								0 10px 40px rgba(131, 56, 236, 0.2);
				}

				/* Typeform Container Transition */
				.typeform-appear {
					animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
				}

				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(50px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Loading Spinner */
				.spinner {
					border: 3px solid rgba(0, 0, 0, 0.1);
					border-top-color: #ff006e;
					border-radius: 50%;
					width: 40px;
					height: 40px;
					animation: spin 0.8s linear infinite;
				}

				@keyframes spin {
					to { transform: rotate(360deg); }
				}

				/* Bubble Screen Layout */
				.bubble-screen {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 100vh;
					position: relative;
					background: #6b7280;
					gap: 3rem;
				}

				/* Start Button */
				.start-button {
					margin-top: 2rem;
				}

				.transparent-button {
					background: rgba(255, 255, 255, 0.1);
					color: #ffffff;
					border: 1px solid rgba(255, 255, 255, 0.2);
					padding: 18px 96px;
					border-radius: 50px;
					font-weight: bold;
					font-size: 24px;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
				}

				.transparent-button:hover {
					background: rgba(255, 255, 255, 0.2);
					border-color: rgba(255, 255, 255, 0.3);
					transform: scale(1.05);
					box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
				}

				/* Chat Interface - Full screen */
				.chat-screen {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 100vh;
					position: relative;
					background: #6b7280;
					padding: 2rem;
				}

				/* Chat Container Styling */
				#chatContainer {
					background: transparent;
					border: none;
					box-shadow: none;
					padding: 20px;
				}

				/* Input Area Styling */
				#inputArea {
					background: transparent;
					border: none;
					box-shadow: none;
					padding: 20px;
				}

				/* Header text styling */
				.header-text {
					color: #ffffff;
				}

				.header-subtitle {
					color: #d1d5db;
				}

				/* Regular white headline text */
				.white-headline {
					color: #ffffff;
					font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
					font-weight: bold;
					text-shadow: none;
					line-height: 1.2;
					letter-spacing: -0.02em;
				}
			`}</style>

			<div className="min-h-screen">
				{/* Page 1: Bubble Screen with just bubble, headline, and start button */}
				<div id="bubbleScreen" className="bubble-screen">
					<div className="text-center page-load-fade">
						<h1 className="text-5xl font-bold white-headline mb-12">
							Identify What's Holding You Back
						</h1>
					</div>

					<div className="page-load-fade">
						<div
							id="mainBubble"
							className="bubble-3d"
							onClick={() => (window as any).startAssessment()}
						></div>
					</div>

					<div className="start-button page-load-fade">
						<button
							onClick={() => (window as any).startAssessment()}
							className="transparent-button"
						>
							Start
						</button>
					</div>
				</div>

				{/* Page 2: Chat Interface */}
				<div id="chatInterface" className="hidden chat-screen">
					<div className="text-center mb-6">
						<h2 className="text-3xl font-bold header-text mb-2">
							Let's Identify What's Holding You Back
						</h2>
						<p className="header-subtitle">
							Be honest - this stays between us
						</p>
					</div>

					<div
						id="chatContainer"
						className="glass-container rounded-3xl p-6 mb-6 h-[500px] w-full max-w-3xl overflow-y-auto shadow-2xl"
					></div>

					<div
						id="inputArea"
						className="glass-container rounded-3xl p-4 w-full max-w-3xl shadow-2xl"
					>
						<div className="flex gap-3">
							<input
								type="text"
								id="userInput"
								placeholder="type here"
								className="flex-1 bg-gray-100 text-black px-6 py-4 rounded-full border border-gray-300 focus:outline-none input-glow placeholder-gray-500"
								onKeyPress={(e) => {
									if (e.key === "Enter") (window as any).sendMessage();
								}}
							/>
							<button
								onClick={() => (window as any).sendMessage()}
								className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
							>
								Send
							</button>
						</div>
					</div>
				</div>

				{/* Page 3: Loading/Analyzing Screen */}
				<div id="analyzingScreen" className="hidden chat-screen">
					<div className="glass-container rounded-3xl p-12 max-w-2xl mx-auto">
						<div className="flex justify-center mb-6">
							<div className="spinner"></div>
						</div>
						<h2 className="text-3xl font-bold text-white mb-4">
							Analyzing your game...
						</h2>
						<p className="text-gray-300 text-lg mb-6">
							Breaking down your struggles and building a custom assessment
						</p>
						<div className="flex justify-center gap-2">
							<div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
							<div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100"></div>
							<div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
						</div>
					</div>
				</div>

				{/* Page 4: Typeform Container */}
				<div id="typeformContainer" className="hidden chat-screen">
					<div className="glass-container rounded-3xl p-8 shadow-2xl typeform-appear max-w-4xl w-full">
						<div className="text-center mb-6">
							<h2 className="text-3xl font-bold text-white mb-2">
								Your Custom Assessment
							</h2>
							<p className="text-gray-300">
								2 minutes. Real game situations. Answer honestly.
							</p>
						</div>

						<div
							id="typeformEmbed"
							className="min-h-[600px] rounded-2xl overflow-hidden"
						>
							<div className="bg-gray-100 rounded-2xl p-12 text-center">
								<h3 className="text-black text-2xl mb-4">Typeform Integration</h3>
								<p className="text-gray-600 mb-6">
									Replace this div with your Typeform embed code:
								</p>
								<code className="bg-gray-200 text-green-600 p-4 rounded-lg block text-left text-sm">
									{`<div data-tf-widget="YOUR_FORM_ID" style="width:100%;height:600px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>`}
								</code>
								<button
									onClick={() => (window as any).simulateQuizComplete()}
									className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:opacity-90"
								>
									[Demo] Complete Assessment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
