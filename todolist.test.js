// Test avec protection de branche - Sprint 6
// Une fonction simple pour tester
function ajouterTache(tache) {
    if (!tache) return false;
    if (tache.length < 3) return false;
    return true;
}

// Les tests
test('ajoute une tâche valide', () => {
    expect(ajouterTache('Apprendre DevOps')).toBe(true);
});

test('refuse une tâche vide', () => {
    expect(ajouterTache('')).toBe(false);
});

test('refuse une tâche trop courte (moins de 3 caractères)', () => {
    expect(ajouterTache('OK')).toBe(false);
});
