import React from 'react';
import './ProfileSection.css';

const profiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    link: 'https://leetcode.com/DvxgFDhYea/',
    stats: (
      <div className="leetcode-stats">
        <div className="circle-stat">
          <span id="total-solved" className="solved-count">--</span>
          <small id="total-problems">Loading...</small>
        </div>
        <ul className="difficulty-breakdown">
          <li><span className="easy">Easy</span> <span id="easy">--</span></li>
          <li><span className="medium">Med.</span> <span id="medium">--</span></li>
          <li><span className="hard">Hard</span> <span id="hard">--</span></li>
        </ul>
      </div>
    ),
  },
  {
    id: 'hackerearth',
    name: 'HackerEarth',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAMFBMVEVHcEwUFBQLCwsGBgYBAQH////p6enX19elpaWCgoKvr69KSkrz8/NoaGjPz88tLS1Ry4FVAAAABHRSTlMAMMrJRFXG2gAAAIBJREFUKJHV0ksOwyAMBFAbbIoDJPe/bcmnTROGKItuMhtGesKSJROxlzlBX3KIYyLeeoMiTK6PnqSP8i8sZgnjOGWtCRP8qVsQqppIqm9EaEupgxGuZdzntqsMVxgfhWiVYmUtyaxBlFs46G9OGHPYkz/o+1Pd96hB5pN3mDzTG5VWDY8profjAAAAAElFTkSuQmCC',
    link: 'https://www.hackerearth.com/@tusharraut704/',
    stats: <p id="hackerearth-stats">Loading...</p>,
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAqFBMVEX///8AAAAhlvP/wQf0QzaqqqoLMlGIiIh3WgPMzMwxDQsnJycFBQXb29vx8fEYGBgTExM7OzsiIiKZmZn5+flGRkbk5ORQUFC+vr6Ojo4NDQ1kZGTExMTS0tIwMDAeHh4RBQQZcrkJJz8eiuB+fn6zs7NlTAMrDArmPzPbpgbSOi6QbQSKJh5bW1tubm42NjYbFAFWQQLOnAa2MiinLiXqsQabdQQTDgEth61CAAADLklEQVR4nO3c63KqMBQFYFGsegRvoKKi0lZqtWrv9f3f7JRyZEchMWTmJNOZtX4H91eCYyFkVyoIgiAIgiAIgiC/OX5w6A8cKxdn0D8EvmldxZ/08jZKb2KYGCxFvCSDwKTPK5ja3FRPzPka13lJGqZ8scT5+0lsxjeaSvqs6cgIcCbrs6yDCZ8rO8HfcVwDwJW8z8z35JnK391WC3J7RyOe9fs6VP2miJfkhsZ0tAPndIHd84D3dJnOtQMDmmCer1qlSdb/g1e/PsPsHNcBBBBAAAEEEMDfD2zFXqMwXtwyDwxnXUuQ7iw0CpyPRbo047N/OvUCZR5hXDzE0Ao8yPCSMPe3OoElbiBXJoD1Igkv9fxR/xvYEX57L9M93T/qA5Z6QkCTrA3oSz+jSjP1NQNjpvjLQ7MwDy/MoFgzkHmI1qxx06RRM81Aegb0yvfVaq/ZsIVmID2mfxMB37JhPc1A+pET+Wq1bJijGWiVBVoAAigLHM1bBZlfrFmYAfrxoWiFNI0zYJdJjQDrAx7ulKVnEOgurvGSLFxTwFC4wkzpBWaAofQKlROYALqS5y9JzzUA7Mv7LKuvH1jqBujnMM3AdjlgWzewxVaP1n8Kso7YMXPNQOYObf1uc/K+plErzcAh+R55Ptt+JGFfM5AuwQ++z7Y/smFdzUC6xxWcwO9TmA1zNAPpU0Q+22aqAQgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAWAuktkU+R7zMb9u8FR7XNp1RNejmWlpi/RMCvbNgyLaW2fZeq7UTAHVONFumPG75vc8yGDdNSahugqVq05fu2EVNtQh9yfOIQN0/ks057NpS2kDPVoh2HuN1FbDXXKpnThn/JNhVpTpvwVaqVelcpfVspraXUxkChWljuENrapNQIQqWaxHYmyj4rpdhKQ6Fap8T7VG22HYFSMxKVavKv9PXOW2JIfk/OG86oVHMl/6r2ZcsOpYY4KtU6e5kj9vl2E8HV13kHYe4gpWqt4bUDhvntk5WkKZN4Q2NxUyalaiNvvOAU6y7GHr+njaitFfcg5WoIgiAIgiAIgiA68xf16I29Tna2oAAAAABJRU5ErkJggg==',
    link: 'https://codeforces.com/profile/your_username',
    stats: <p id="codeforces-stats">Loading...</p>,
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    logo: 'data:image/jpeg;base64,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',
    link: 'https://www.codechef.com/users/your_username',
    stats: <p id="codechef-stats">Loading...</p>,
  },
];

const ProfileSection = () => (
  <section className="page profile-section">
    <h2>Profiles & Live Stats</h2>
    <div className="profiles-container">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.logo} alt={`${profile.name} Logo`} />
          <h3>{profile.name}</h3>
          {profile.stats}
          <a href={profile.link} target="_blank" rel="noreferrer">
            Visit Profile →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProfileSection;
