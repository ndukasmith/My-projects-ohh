function interview(candidate) {
    return new Promise((resolve, reject) => {
    const isSuccessful = Math.random() > 0.5;
    console.log(`Interviewing ${candidate}...`);
    setTimeout(() => {
    isSuccessful ? resolve(candidate) : reject(new Error(`${candidate} was rejected.`));
    }, 1000);
    });
    }
    
    const candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3', 'Candidate 4'];
    
    Promise.allSettled(candidates.map(interview))
    .then(results => {
    const successfulCandidates = results.filter(result => result.status === 'fulfilled').map(result => result.value);
    console.log(`Successful candidates: ${successfulCandidates.join(', ')}`);
    if (successfulCandidates.length > 1) {
    // Interview the top two candidates again
    return Promise.all([
    interview(successfulCandidates[0]),
    interview(successfulCandidates[1])
    ]);
    } else {
    return Promise.reject(new Error('Not enough candidates to proceed to the second round.'));
    }
    })
    .then(secondRoundResults => {
    // Choose one candidate from the two successful second-round candidates
    const finalCandidate = secondRoundResults[0] ? secondRoundResults[0] : secondRoundResults[1];
    console.log(`${finalCandidate} is the final choice.`);
    return finalCandidate;
    })
    .catch(error => {
    console.log(`An error occurred during the interview process: ${error.message}`);
    });