"use client";

import { useState } from "react";

export default function PlatformPage() {
	const [activeTab, setActiveTab] = useState("chat");
	const [messages, setMessages] = useState([
		{
			id: 1,
			user: "Coach Mike",
			message: "Great work today everyone! Keep pushing!",
			time: "2:45 PM",
			avatar: "👨‍🏫",
		},
		{
			id: 2,
			user: "Jordan",
			message: "Just finished the decision-making module. Game-changing stuff.",
			time: "3:12 PM",
			avatar: "🏀",
		},
		{
			id: 3,
			user: "Alex",
			message: "Anyone down for a zoom session tonight?",
			time: "3:45 PM",
			avatar: "⚡",
		},
	]);

	const [newMessage, setNewMessage] = useState("");

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			setMessages([
				...messages,
				{
					id: messages.length + 1,
					user: "You",
					message: newMessage,
					time: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					avatar: "😎",
				},
			]);
			setNewMessage("");
		}
	};

	const courses = [
		{
			id: 1,
			title: "Decision Making Under Pressure",
			progress: 68,
			modules: 12,
			completed: 8,
		},
		{
			id: 2,
			title: "Court Awareness & IQ",
			progress: 72,
			modules: 10,
			completed: 7,
		},
		{
			id: 3,
			title: "Confidence & Mental Game",
			progress: 45,
			modules: 15,
			completed: 6,
		},
	];

	const wins = [
		{ id: 1, user: "Marcus", achievement: "Started in varsity game", emoji: "🏆" },
		{ id: 2, user: "Sarah", achievement: "15 assists in last game", emoji: "🔥" },
		{ id: 3, user: "Devon", achievement: "Completed all modules", emoji: "💪" },
		{ id: 4, user: "Tyler", achievement: "Got recruited by D1 school", emoji: "🎯" },
	];

	const jobPosts = [
		{
			id: 1,
			title: "Basketball Coach - Youth Program",
			company: "Elite Sports Academy",
			type: "Part-time",
			pay: "$25-35/hr",
		},
		{
			id: 2,
			title: "Training Guard - Summer Camp",
			company: "Guard IQ Academy",
			type: "Seasonal",
			pay: "$30-40/hr",
		},
		{
			id: 3,
			title: "Personal Trainer - Basketball Focused",
			company: "Athletic Edge",
			type: "Contract",
			pay: "$50-75/session",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
			{/* Header */}
			<header className="bg-black/30 backdrop-blur-md border-b border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
								GUARD IQ
							</div>
							<div className="text-sm text-gray-400">MODE SITE</div>
						</div>
						<div className="flex items-center gap-6">
							<button className="text-gray-300 hover:text-white transition-colors">
								🔔
							</button>
							<button className="text-gray-300 hover:text-white transition-colors">
								⚙️
							</button>
							<div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
								ME
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column - Community Chat */}
					<div className="lg:col-span-2 space-y-6">
						{/* Tab Navigation */}
						<div className="flex gap-3 bg-black/30 backdrop-blur-md p-2 rounded-xl border border-white/10">
							<button
								onClick={() => setActiveTab("chat")}
								className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
									activeTab === "chat"
										? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
										: "text-gray-400 hover:text-white"
								}`}
							>
								💬 Community Chat
							</button>
							<button
								onClick={() => setActiveTab("courses")}
								className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
									activeTab === "courses"
										? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
										: "text-gray-400 hover:text-white"
								}`}
							>
								📚 Courses
							</button>
							<button
								onClick={() => setActiveTab("jobs")}
								className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
									activeTab === "jobs"
										? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
										: "text-gray-400 hover:text-white"
								}`}
							>
								💼 Job Board
							</button>
						</div>

						{/* Community Chat */}
						{activeTab === "chat" && (
							<div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
								<div className="p-6 border-b border-white/10">
									<h2 className="text-2xl font-bold text-white">
										Community Chat
									</h2>
									<p className="text-gray-400 text-sm mt-1">
										Connect with other guards
									</p>
								</div>
								<div className="p-6 space-y-4 h-[500px] overflow-y-auto">
									{messages.map((msg) => (
										<div
											key={msg.id}
											className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
										>
											<div className="flex items-start gap-3">
												<div className="text-2xl">{msg.avatar}</div>
												<div className="flex-1">
													<div className="flex items-center gap-2">
														<span className="font-semibold text-white">
															{msg.user}
														</span>
														<span className="text-xs text-gray-500">
															{msg.time}
														</span>
													</div>
													<p className="text-gray-300 mt-1">{msg.message}</p>
												</div>
											</div>
										</div>
									))}
								</div>
								<div className="p-6 border-t border-white/10">
									<div className="flex gap-3">
										<input
											type="text"
											value={newMessage}
											onChange={(e) => setNewMessage(e.target.value)}
											onKeyPress={(e) => {
												if (e.key === "Enter") handleSendMessage();
											}}
											placeholder="Type your message..."
											className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
										/>
										<button
											onClick={handleSendMessage}
											className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
										>
											Send
										</button>
									</div>
								</div>
							</div>
						)}

						{/* Courses Tab */}
						{activeTab === "courses" && (
							<div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
								<div className="p-6 border-b border-white/10">
									<h2 className="text-2xl font-bold text-white">
										Course Modules
									</h2>
									<p className="text-gray-400 text-sm mt-1">
										Your personalized training path
									</p>
								</div>
								<div className="p-6 space-y-4">
									{courses.map((course) => (
										<div
											key={course.id}
											className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/5"
										>
											<div className="flex items-start justify-between mb-4">
												<div>
													<h3 className="text-xl font-bold text-white">
														{course.title}
													</h3>
													<p className="text-gray-400 text-sm mt-1">
														{course.completed}/{course.modules} modules
														completed
													</p>
												</div>
												<div className="text-2xl font-bold text-purple-400">
													{course.progress}%
												</div>
											</div>
											<div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
												<div
													className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-500"
													style={{ width: `${course.progress}%` }}
												></div>
											</div>
											<button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
												Continue Learning
											</button>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Job Board Tab */}
						{activeTab === "jobs" && (
							<div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
								<div className="p-6 border-b border-white/10">
									<h2 className="text-2xl font-bold text-white">Job Board</h2>
									<p className="text-gray-400 text-sm mt-1">
										Opportunities for guards
									</p>
								</div>
								<div className="p-6 space-y-4">
									{jobPosts.map((job) => (
										<div
											key={job.id}
											className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/5"
										>
											<h3 className="text-xl font-bold text-white">
												{job.title}
											</h3>
											<p className="text-purple-400 mt-1">{job.company}</p>
											<div className="flex items-center gap-4 mt-3">
												<span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
													{job.type}
												</span>
												<span className="text-green-400 font-semibold">
													{job.pay}
												</span>
											</div>
											<button className="mt-4 w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/10">
												View Details
											</button>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Right Column - Win Board & Tools */}
					<div className="space-y-6">
						{/* Win Board */}
						<div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
							<div className="p-6 border-b border-white/10">
								<h2 className="text-xl font-bold text-white">
									🏆 Win Board
								</h2>
								<p className="text-gray-400 text-sm mt-1">
									All we do is win
								</p>
							</div>
							<div className="p-6 space-y-3">
								{wins.map((win) => (
									<div
										key={win.id}
										className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg p-4 border border-purple-500/20"
									>
										<div className="flex items-start gap-3">
											<div className="text-2xl">{win.emoji}</div>
											<div>
												<p className="font-semibold text-white">{win.user}</p>
												<p className="text-gray-300 text-sm">
													{win.achievement}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="p-6 border-t border-white/10">
								<button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
									Share Your Win
								</button>
							</div>
						</div>

						{/* Zoom Sessions */}
						<div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
							<div className="p-6 border-b border-white/10">
								<h2 className="text-xl font-bold text-white flex items-center gap-2">
									<span>📹</span> Zoom Sessions
								</h2>
							</div>
							<div className="p-6 space-y-4">
								<div className="bg-white/5 rounded-lg p-4 border border-white/5">
									<p className="text-white font-semibold">
										Next Group Call
									</p>
									<p className="text-gray-400 text-sm mt-1">
										Tonight at 8:00 PM EST
									</p>
									<button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
										Join Zoom
									</button>
								</div>
								<div className="bg-white/5 rounded-lg p-4 border border-white/5">
									<p className="text-white font-semibold">1-on-1 Coaching</p>
									<p className="text-gray-400 text-sm mt-1">
										Schedule a private session
									</p>
									<button className="mt-3 w-full bg-white/10 text-white py-2 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/10">
										Book Session
									</button>
								</div>
							</div>
						</div>

						{/* Mastermind Upsell */}
						<div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl overflow-hidden border-2 border-yellow-400">
							<div className="p-6">
								<div className="text-3xl mb-2">🔥</div>
								<h2 className="text-xl font-bold text-white mb-2">
									In-Person Mastermind
								</h2>
								<p className="text-yellow-100 text-sm mb-4">
									Take your game to the next level with our exclusive in-person
									training camps
								</p>
								<ul className="space-y-2 mb-4">
									<li className="text-white text-sm flex items-start gap-2">
										<span className="text-yellow-300">✓</span>
										<span>3-day intensive training</span>
									</li>
									<li className="text-white text-sm flex items-start gap-2">
										<span className="text-yellow-300">✓</span>
										<span>Direct coach access</span>
									</li>
									<li className="text-white text-sm flex items-start gap-2">
										<span className="text-yellow-300">✓</span>
										<span>Network with elite guards</span>
									</li>
								</ul>
								<button className="w-full bg-white text-orange-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
