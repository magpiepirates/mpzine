using UnityEngine;
using System.Collections;


public class PlayerMovement : MonoBehaviour {
public float movementSpeed = 1f;   
public Vector2 movement;           
public new Rigidbody2D rigidbody;      
void Start()
{
    rigidbody = this.GetComponent<Rigidbody2D>(); 
}
 void FixedUpdate()
{
    rigidbody.MovePosition(rigidbody.position + movement * movementSpeed * Time.fixedDeltaTime);
}
void Update()
{
    movement.x = Input.GetAxisRaw("Horizontal");
    movement.y = Input.GetAxisRaw("Vertical");
}

}