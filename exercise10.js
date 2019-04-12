function getDiffrent(givenNumber) {
    if(givenNumber > 13)
        return 2 * Math.abs(13 - givenNumber);
    return 13 - givenNumber;
}