
// the setup function runs once when you press reset or power the board
void setup() {
  
  pinMode(10, OUTPUT);
  pinMode(12, OUTPUT);
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {

  int piezoADC = analogRead(0);
  //if over tollerance declare it a hit
  if(piezoADC>60){
  digitalWrite(10, HIGH);
  digitalWrite(12, HIGH);
  Serial.write(piezoADC);
  delay(500);                       // wait for a second
  digitalWrite(10, LOW);    // turn the LED off by making the voltage LOW
  digitalWrite(12, LOW);    // turn the LED off by making the voltage LOW
  }
  //delay(1000);                       // wait for a second
}
